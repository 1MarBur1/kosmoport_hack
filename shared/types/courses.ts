interface ICourse {
  title: string;
  description: string;
  teacher_id: string;
  age_from: number;
  age_to: number;
  requirements: string;
  price: number;
  image_id: string;
  docs_ids: string;
  id: number;
  is_submitted: boolean;
  times: string[];
  specialization: string;
}

export type { ICourse };
