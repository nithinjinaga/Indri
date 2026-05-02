interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

const stores: Store[] = [
  {
    name: "Indri Connaught Place",
    address: "42 MG Road, Connaught Place, New Delhi 110001",
    phone: "+91 11 2345 6789",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    lat: 28.6315,
    lng: 77.2167
  },
  {
    name: "Indri Bandra", 
    address: "15 Linking Road, Bandra West, Mumbai 400050",
    phone: "+91 22 2648 1234",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    lat: 19.0596,
    lng: 72.8295
  },
  {
    name: "Indri Indiranagar",
    address: "100 Feet Road, Indiranagar, Bengaluru 560038", 
    phone: "+91 80 2525 6789",
    hours: "Mon-Sat: 11AM-8PM, Sun: 12PM-7PM",
    lat: 12.9784,
    lng: 77.6408
  }
];

const StoreMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-border bg-muted/10 relative">
      {/* Static Map using Google Maps Embed API */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.864792639638!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      
      {/* Overlay with store markers */}
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <h4 className="text-sm font-medium text-foreground mb-3">Our Locations</h4>
        <div className="space-y-2">
          {stores.map((store, index) => (
            <div key={index} className="text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="font-medium text-foreground">{store.name}</span>
              </div>
              <p className="text-muted-foreground ml-4">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreMap;