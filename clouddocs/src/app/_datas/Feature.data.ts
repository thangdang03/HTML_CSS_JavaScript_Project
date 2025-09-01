import { 
  Users, 
  Shield, 
  PenTool,
  Layout,
  MessageSquare,
  Bell
} from 'lucide-react';

export const features = [
  {
    name: "Modern Editor",
    description: "Powerful rich text editor with real-time collaboration",
    icon: PenTool,
  },
  {
    name: "Team Collaboration",
    description: "Work together seamlessly with your team members",
    icon: Users,
  },
  {
    name: "Smart Templates",
    description: "Create documents quickly with pre-built professional templates",
    icon: Layout,
  },
  {
    name: "Enterprise Security",
    description: "Advanced security features with role-based access control",
    icon: Shield,
  },
  {
    name: "Interactive Comments",
    description: "Collaborate through inline comments and discussions",
    icon: MessageSquare,
  },
  {
    name: "Smart Notifications",
    description: "Stay updated with real-time document activity notifications",
    icon: Bell,
  }
];