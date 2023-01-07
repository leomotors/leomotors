export type NPMPackage = {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: Record<string, unknown>;
  author: Record<string, unknown>;
  publisher: Record<string, unknown>;
  maintainers: Record<string, unknown>[];
};

export type NPMObject = {
  package: NPMPackage;
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  };
  searchScore: number;
};

export type NPMReturnType = {
  objects: NPMObject[];
  total: number;
  time: string;
};

export type NPMPackageReturnType = {
  time: {
    created: string;
  };
};
