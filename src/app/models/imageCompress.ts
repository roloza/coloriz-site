export class ImageCompress {
  datas: {
    id: number;
    created_at: string;
    updated_at: string;
    gain: number;
    gain_pct: number;
    id_image: number;
    id_image_compress: number;
    original_name: string;
  };
  file: {
    id: number
    color: string;
    created_at: string;
    updated_at: string;
    height: number;
    width: number;
    palette: string;
    path: string;
    size: number;
    type: string;
    url: string;
  };
  fileCompress: {
    id: number
    color: string;
    created_at: string;
    updated_at: string;
    height: number;
    width: number;
    palette: string;
    path: string;
    size: number;
    type: string;
    url: string;
  };
}
