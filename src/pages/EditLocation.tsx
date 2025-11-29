import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import StepIndicator from '@/components/ui/StepIndicator';
import { locations, categories } from '@/data/locations';

const EditLocation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find(loc => loc.id === id) || locations[0];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: location.name,
    category: location.category.toLowerCase(),
    facilities: { ...location.facilities },
    description: location.description,
  });

  const steps = ['Informasi', 'Fasilitas', 'Review'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/location-updated');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFacilityChange = (facility: keyof typeof formData.facilities) => {
    setFormData({
      ...formData,
      facilities: {
        ...formData.facilities,
        [facility]: !formData.facilities[facility],
      },
    });
  };

  const facilities = [
    { id: 'ramp', label: 'Ramp / Jalur Landai' },
    { id: 'toilet', label: 'Toilet Difabel' },
    { id: 'guidingBlock', label: 'Guiding Block' },
    { id: 'lift', label: 'Lift / Elevator' },
  ];

  return (
    <Layout showFAB={false}>
      <div className="min-h-screen bg-background section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Back Link */}
            <Link
              to={`/location/${id}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Detail
            </Link>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Edit Lokasi
              </h1>
              <p className="text-muted-foreground">
                Perbarui informasi aksesibilitas {location.name}
              </p>
            </div>

            {/* Step Indicator */}
            <StepIndicator steps={steps} currentStep={currentStep} />

            {/* Form */}
            <div className="card-base p-6 md:p-8">
              {/* Step 1: Basic Info */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Tempat
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Kategori
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setFormData({ ...formData, category: cat.id })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.category === cat.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/30'
                          }`}
                        >
                          <span className="font-medium text-foreground">{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Facilities */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-muted-foreground mb-6">
                    Update fasilitas aksesibilitas yang tersedia
                  </p>
                  {facilities.map(facility => (
                    <label
                      key={facility.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.facilities[facility.id as keyof typeof formData.facilities]
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.facilities[facility.id as keyof typeof formData.facilities]
                            ? 'bg-primary border-primary'
                            : 'border-border'
                        }`}
                      >
                        {formData.facilities[facility.id as keyof typeof formData.facilities] && (
                          <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium text-foreground">{facility.label}</span>
                      <input
                        type="checkbox"
                        checked={formData.facilities[facility.id as keyof typeof formData.facilities]}
                        onChange={() => handleFacilityChange(facility.id as keyof typeof formData.facilities)}
                        className="sr-only"
                      />
                    </label>
                  ))}
                </div>
              )}

              {/* Step 3: Review */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deskripsi
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      className="input-base resize-none"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-medium text-foreground mb-3">Ringkasan Perubahan</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Nama:</span>
                        <span className="ml-2 font-medium text-foreground">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Kategori:</span>
                        <span className="ml-2 font-medium text-foreground capitalize">{formData.category}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-2">Fasilitas:</span>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(formData.facilities)
                            .filter(([, value]) => value)
                            .map(([key]) => (
                              <span key={key} className="badge-success text-xs">
                                {facilities.find(f => f.id === key)?.label}
                              </span>
                            ))}
                          {Object.entries(formData.facilities)
                            .filter(([, value]) => !value)
                            .map(([key]) => (
                              <span key={key} className="badge-destructive text-xs">
                                {facilities.find(f => f.id === key)?.label}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`btn-ghost ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali
                </button>
                <button onClick={handleNext} className="btn-primary">
                  {currentStep === steps.length - 1 ? (
                    <>
                      <Save className="w-4 h-4" />
                      Simpan Perubahan
                    </>
                  ) : (
                    'Lanjut'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditLocation;
