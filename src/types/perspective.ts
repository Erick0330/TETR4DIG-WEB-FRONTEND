export interface Perspective {
  id_perspective: number;
  id_ambit: number;
  perspective_name: string;

}

export interface createPerspectiveDto {

  id_ambit: number;
  perspective_name: string;
}
