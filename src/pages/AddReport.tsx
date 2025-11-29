import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowRight, ArrowLeft, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import StepIndicator from '@/components/ui/StepIndicator';
import { cities, categories } from '@/data/locations';

const AddReport = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    category: '',
    facilities: {
      ramp: false,
      toilet: false,
      guidingBlock: false,
      lift: false,
    },
    description: '',
    photos: [] as File[],
  });

  const steps = ['Informasi', 'Fasilitas', 'Detail'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/report-submitted');
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
    { id: 'ramp', label: 'Ramp / Jalur Landai', description: 'Jalur miring untuk kursi roda' },
    { id: 'toilet', label: 'Toilet Difabel', description: 'Toilet dengan akses kursi roda' },
    { id: 'guidingBlock', label: 'Guiding Block', description: 'Ubin pengarah untuk tunanetra' },
    { id: 'lift', label: 'Lift / Elevator', description: 'Lift dengan akses difabel' },
  ];

  return (
    <Layout showFAB={false}>
      <div className="min-h-screen bg-background section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Laporkan Tempat
              </h1>
              <p className="text-muted-foreground">
                Bantu kami memetakan aksesibilitas fasilitas publik
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
                      Nama Tempat *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="contoh: Universitas Indonesia"
                      className="input-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Kota *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="input-base"
                    >
                      <option value="">Pilih Kota</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Kategori *
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
                    Pilih fasilitas aksesibilitas yang tersedia di lokasi ini
                  </p>
                  {facilities.map(facility => (
                    <label
                      key={facility.id}
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.facilities[facility.id as keyof typeof formData.facilities]
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
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
                      <div className="flex-1">
                        <span className="font-medium text-foreground block">{facility.label}</span>
                        <span className="text-sm text-muted-foreground">{facility.description}</span>
                      </div>
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

              {/* Step 3: Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Upload Foto
                    </label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground mb-1">Klik untuk upload foto</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG hingga 5MB</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deskripsi Tambahan
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Ceritakan detail kondisi aksesibilitas di lokasi ini..."
                      rows={4}
                      className="input-base resize-none"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-medium text-foreground mb-3">Ringkasan Laporan</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          {formData.name || 'Nama tempat'}, {formData.city || 'Kota'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Object.entries(formData.facilities)
                          .filter(([, value]) => value)
                          .map(([key]) => (
                            <span key={key} className="badge-success text-xs">
                              {facilities.find(f => f.id === key)?.label}
                            </span>
                          ))}
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
                  {currentStep === steps.length - 1 ? 'Kirim Laporan' : 'Lanjut'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddReport;
