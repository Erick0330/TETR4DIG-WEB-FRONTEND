export interface Ambit {

  id_ambit: number;
  ambit: string;
  points: number;
  questions_amount: number;
}

export interface createAmbitDto {
  ambit: string;
  points: number;
}

export interface updateAmbitDto {
  ambit: string;
}
