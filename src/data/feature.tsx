import { HandHeart, LucideIcon, Settings, Shield } from 'lucide-react'

interface feature {
  icon: LucideIcon
  id: string
  title: string
  description: string
  color: string
}

export const features: feature[] = [
  {
    id: 'baby-safe',
    icon: Shield,
    title: 'Babysicher',
    description:
      '100% schadstofffrei, speichelfest und nach höchsten Sicherheitsstandards geprüft – für unbeschwertes Spielen.',
    color: 'bg-green-200',
  },
  {
    id: 'baby-handmade',
    icon: HandHeart,
    title: 'Handgemacht',
    description:
      'Jedes Stück wird mit Liebe von Hand gefertigt und bleibt ein echtes Unikat.',
    color: 'bg-orange-200',
  },
  {
    id: 'baby-custimization',
    icon: Settings,
    title: 'Personalisierbar',
    description:
      'Gestalte dein Accessoire mit Namen oder Initialen – so einzigartig wie dein Baby.',
    color: 'bg-blue-200',
  },
  {
    id: 'baby-quality',
    icon: Settings,
    title: 'Höchste Qualität',
    description:
      'Hochwertige Materialien für langlebige Produkte, perfekt für den Alltag mit deinem Kind.',
    color: 'bg-yellow-200',
  },
]
