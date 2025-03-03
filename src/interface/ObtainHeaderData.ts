export interface ApiResponse {
    data: DataItem[];
    meta: Meta;
}

export interface DataItem {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    titulo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    iconoNabvar: IconoData;
    iconoInicio: IconoData;
    socialMedia: SocialMedia[];
}

export interface IconoData {
    data: IconData;
}

export interface IconData {
    id: number;
    attributes: IconAttributes;
}

export interface IconAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}

export interface SocialMedia {
    id: number;
    URL: string;
    media: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
