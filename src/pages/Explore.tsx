import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import LocationCard from '@/components/ui/LocationCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import { locations, categories, cities } from '@/data/locations';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const facilities = [
    { id: 'ramp', label: 'Ramp' },
    { id: 'toilet', label: 'Toilet Difabel' },
    { id: 'guidingBlock', label: 'Guiding Block' },
    { id: 'lift', label: 'Lift' },
  ];

  const toggleFacility = (id: string) => {
    setSelectedFacilities(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || location.category.toLowerCase() === selectedCategory;
    const matchesCity = !selectedCity || location.city === selectedCity;
    const matchesFacilities = selectedFacilities.length === 0 ||
      selectedFacilities.every(f => location.facilities[f as keyof typeof location.facilities]);
    
    return matchesSearch && matchesCategory && matchesCity && matchesFacilities;
  });

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedCity('');
    setSelectedFacilities([]);
  };

  const hasActiveFilters = selectedCategory || selectedCity || selectedFacilities.length > 0;

  return (
    <Layout>
      <div className="min-h-screen bg-background relative">
        <ParallaxBackground variant="subtle" shapesCount={3} className="fixed" />
        
        <div className="container-custom py-8 relative">
          {/* Header */}
          <ScrollReveal animation="fade-down">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Explore Lokasi
              </h1>
              <p className="text-muted-foreground">
                Temukan fasilitas publik yang aksesibel di Indonesia
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <ScrollReveal animation="fade-right">
                <div className="card-base p-6 sticky top-24 backdrop-blur-sm bg-card/80">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-semibold text-lg">Filter</h3>
                    {hasActiveFilters && (
                      <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                        Reset
                      </button>
                    )}
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">Kategori</label>
                    <div className="space-y-2">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(selectedCategory === cat.id ? '' : cat.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted hover:bg-muted/80 text-foreground'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* City Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">Kota</label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="input-base"
                    >
                      <option value="">Semua Kota</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  {/* Facilities Filter */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Fasilitas</label>
                    <div className="space-y-2">
                      {facilities.map(facility => (
                        <label
                          key={facility.id}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                              selectedFacilities.includes(facility.id)
                                ? 'bg-primary border-primary'
                                : 'border-border group-hover:border-primary/50'
                            }`}
                          >
                            {selectedFacilities.includes(facility.id) && (
                              <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-foreground">{facility.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="flex gap-3 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Cari lokasi..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-base pl-12"
                    />
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden btn-secondary px-4"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </ScrollReveal>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden card-base p-4 mb-6 animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold">Filter</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="input-base text-sm"
                    >
                      <option value="">Semua Kategori</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="input-base text-sm"
                    >
                      <option value="">Semua Kota</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {facilities.map(facility => (
                      <button
                        key={facility.id}
                        onClick={() => toggleFacility(facility.id)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedFacilities.includes(facility.id)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {facility.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Count */}
              <p className="text-sm text-muted-foreground mb-6">
                Menampilkan {filteredLocations.length} lokasi
              </p>

              {/* Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredLocations.map((location, index) => (
                  <ScrollReveal 
                    key={location.id} 
                    animation="fade-up" 
                    delay={Math.min(index * 50, 300)}
                  >
                    <LocationCard
                      id={location.id}
                      name={location.name}
                      city={location.city}
                      category={location.category}
                      image={location.image}
                      status={location.status}
                      delay={0}
                    />
                  </ScrollReveal>
                ))}
              </div>

              {filteredLocations.length === 0 && (
                <ScrollReveal animation="zoom-in">
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">Tidak ada lokasi yang ditemukan</p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
