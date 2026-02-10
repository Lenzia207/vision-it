import * as LucideIcons from "lucide-react";

interface IconLucideProps {
  iconName: string;
  className?: string;
  size?: number;
}

export default function IconLucide({
  iconName,
  className,
  size,
}: IconLucideProps) {
  // Convert kebab-case or snake_case to PascalCase
  const formatIconName = (name: string): string => {
    return name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  const formattedName = formatIconName(iconName);

  // Get the icon component from the Lucide icons object
  const IconComponent = (LucideIcons as Record<string, any>)[formattedName];

  // Fallback to a default icon if the requested icon doesn't exist
  if (!IconComponent) {
    console.warn(
      `Icon "${iconName}" (${formattedName}) not found. Using default icon.`
    );
    const DefaultIcon = LucideIcons.HelpCircle;
    return <DefaultIcon className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
