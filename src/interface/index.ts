import { FormEvent, ReactNode } from "react";

export interface IChildren {
    children: ReactNode,
    handlerSubmit: (evt:FormEvent) => void
}