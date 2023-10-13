type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}

const venda: NovoCarrinho = {
    item: {
        nome: "Bola de Basquete",
        descricao: "Bola de Basquete linda de mais",
        valor: 123
    },
    qtd: 3,
    desconto: 12,
    frete: 100,
    tipoTransacao: "debito",
    cartao: {
        numero: 123456789,
        validade: "Jan/2025",
        nome: "João Dasneves",
        cvv: 123
    },
    endereco: {
        cep: "00000-000",
        rua: "Aquela",
        bairro: "Centro",
        cidade: "Boa",
        estado: "FE"
    }
}