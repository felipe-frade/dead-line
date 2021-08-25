import { Therapist } from "./therapist";

export interface Event {
  id: number
  title: string
  start: string
  therapists: Therapist[]
}
