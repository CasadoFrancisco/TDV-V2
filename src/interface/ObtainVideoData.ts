export interface VideoData {
    id: number;
    attributes: {
      titulo: string;
      CategodiaVideo: string;
      IdVideo: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }
  
  export interface FetchVideosResponse {
    data: VideoData[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

  export interface Video {
    id: string;
    title: string;
    src: string;
  }

  export type Category = "Últimos Videos" | "Más Vistos";

  