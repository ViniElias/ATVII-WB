import { ChangeEvent, Component, FormEvent } from "react";
import "./Form.css"

type State = {
    cpf: string;
    mensagem: string;
};

export default class ExcCliente extends Component<{}, State> {
    state: State = {
        cpf: '',
        mensagem: ''
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        this.setState({
            cpf: '',
            mensagem: 'Cliente excluído com sucesso!'
        });
    };

    render() {
        const { cpf } = this.state;

        return (
            <div className="form">
                <h3>Excluir</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text" id="cpf" name="cpf"
                        value={cpf} onChange={this.handleChange}
                        required pattern="\d{11}" maxLength={11}
                        title="Apenas números são aceitos."
                    />
                    <button type="submit">Excluir</button>
                </form>
                {this.state.mensagem && (
                    <p className="mensagem">{this.state.mensagem}</p>
                )}
            </div>
        );
    };
};