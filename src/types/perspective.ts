export interface Perspective {
  id_perspective: number;
  id_ambit: number;
  points: number;
  questions_amount: number;
  perspective_name: string;

}

export interface createPerspectiveDto {

  id_ambit: number;
  perspective_name: string;
  points: number;
}

export interface updatePerspectiveDto {
  perspective_name: string;
}
