

export interface useQueryProps {
    url: string,
    method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "PATCH" | "HEAD",
    body?: string
}

export async function useQuery({method="GET", ...props}: useQueryProps): Promise<Response> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    headers.append("Accept", 'application/json');
    

    const response = await fetch(props.url, {
        method: method,
        headers: headers,
        body: props.body,
        credentials: 'same-origin'
    });

    return response;

}