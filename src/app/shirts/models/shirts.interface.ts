export interface Shirt {
  title: string;
  subtitle: string;
  colors: ShirtColor[];
  selectedColor?: ShirtColor;
}

export interface ShirtColor {
  name: string;
  image: string;
}
