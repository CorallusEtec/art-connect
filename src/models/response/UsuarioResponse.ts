export type TipoConta = 'ARTISTA' | 'CONTRATANTE' | 'ADMIN';
export type TipoStatus = 'ATIVO' | 'PENDENTE' | 'SUSPENSO' | 'EXCLUIDO';

// 3. Interface para o objeto interno de Status
export interface Status {
  id: number;
  tipoStatus: TipoStatus;
  descricao?: string;
  dataModificacao: string; // Vem como string no formato ISO (ex: "2026-05-21T14:47:22")
}

export interface UsuarioResponse {
  id: number;
  nome: string;
  email: string;
  tipoConta: TipoConta;
  status: Status;
  dataCriacao: string;
  fotoPerfilUrl?: string;
  nomeLog?: string;
  numLog?: number;
  cep?: string;
  bairro?: string;
  complemento?: string;
  cidade?: string;
  uf?: string;
  textoBio?: string; 
}

/**
 * "id": 0,
      "nome": "string",
      "email": "string",
      "tipoConta": "ARTISTA",
      "status": {
        "id": 0,
        "tipoStatus": "ATIVO",
        "descricao": "string",
        "dataModificacao": "2026-06-19T03:47:04.398Z"
      },
      "dataCriacao": "2026-06-19T03:47:04.398Z",
      "fotoPerfilUrl": "string",
      "nomeLog": "string",
      "numLog": 0,
      "cep": "string",
      "bairro": "string",
      "complemento": "string",
      "cidade": "string",
      "uf": "string",
      "publicacoes": [
        {
          "id": 0,
          "legenda": "string",
          "urlMidia": "string",
          "tipoMidia": "VIDEO",
          "dataPublicacao": "2026-06-19T03:47:04.398Z",
          "autor": {
            "id": 0,
            "nome": "string",
            "tipoConta": "ARTISTA",
            "fotoPerfilUrl": "string"
          }
        }
      ],
      "arte": {
        "id": 0,
        "nomeArte": "string"
      },
      "generosArte": [
        {
          "id": 0,
          "nomeGeneroArte": "string",
          "arte": {
            "id": 0,
            "nomeArte": "string"
          }
        }
      ],
      "textoBio": "string",
      "contatos": [
        {
          "idContato": 0,
          "tipoContato": {
            "idTipoContato": 0,
            "tipoContato": "string"
          },
          "valorContato": "string"
        }
      ]
    
 * 
 * 
 */