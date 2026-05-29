
import { $ZodIssue } from "zod/v4/core"

export type ShowErrorProps = {
    errors?: $ZodIssue[]
}

export function ShowErrors({errors = [], ...props}: ShowErrorProps) {
    
    return (    
        <div className="flex flex-col transition-all">
            {errors.map((e, index) => (
                <div key={index}>
                    <span className="text-vermelho-400 text-xs font-medium transition-all">* {e.message}</span>
                </div>
            ))}
        </div>   
    )
}
