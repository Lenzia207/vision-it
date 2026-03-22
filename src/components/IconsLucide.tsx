import * as LucideIcons from "lucide-react";
import React from "react";

interface IconLucideProps {
  iconName: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

type LucideIcon = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: string | number; className?: string }
>;

export default function IconLucide({
  iconName,
  className,
  size,
  style,
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
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[formattedName];

  // Fallback to a default icon if the requested icon doesn't exist
  if (!IconComponent) {
    console.warn(
      `Icon "${iconName}" (${formattedName}) not found. Using default icon.`
    );
    const DefaultIcon: LucideIcon = LucideIcons.HelpCircle;
    return <DefaultIcon className={className} size={size} style={style} />;
  }

  return <IconComponent className={className} size={size} style={style} />;
}
