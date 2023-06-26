export type Application = {
  id: string;
  name: string;
  domains: string[];
};

export type AppCardProps = {
  app?: Application;
  loading: boolean;
  isActive?: boolean;
  showNoResultsMessage?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
