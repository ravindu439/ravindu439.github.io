import AppImage from '@/components/ui/AppImage';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verificationUrl: string;
}

interface CertificationCardProps {
  certification: Certification;
  onClick?: () => void;
}

export default function CertificationCard({ certification, onClick }: CertificationCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-interactive transition-smooth group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={certification.image}
          alt={certification.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-smooth">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-headline font-bold text-foreground mb-2">
          {certification.title}
        </h4>
        <p className="text-sm font-body text-secondary mb-1">{certification.issuer}</p>
        <p className="text-xs font-mono text-muted-foreground mb-3">{certification.date}</p>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs font-mono text-muted-foreground">
            ID: {certification.credentialId}
          </span>
        </div>
      </div>
    </div>
  );
}