import { PrismaClient } from "@prisma/client";
import * as TiposModel from './../models/tiposModel.js'

const prisma = new PrismaClient();

// Lista todos os tipos, pode filtrar por especie
export const listarTodos = async (req, res) => {
    try {
        const filtros = {};

        //Verifica se o filtro de especie foi enviado pela query
        if (req.query.especie) filtros.especie = req.query.especie;

        const tipos = await TiposModel.encontreTodos(filtros);

        //Se nao encontrar tipos, retorna mensagem de erro
        if (!tipos || tipos.length === 0) {
            return res.status(404).json({
                total: 0,
                mensagem: 'Não há tipos cadastrados dessa espécie!', filtros
            });
        }

        //Retorna os tipos encontrados junto com o filtro 
        res.status(200).json({
            total: tipos.length,
            mensagem: 'Lista de tipos de pets disponíveis', filtros,
            tipos
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao listar tipos',
            detalhes: error.message
        });
    }

}

// Lista um tipo de pet especifico pelo ID
export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        // Verifica se o ID é valido
        if (isNaN(id)) {
            return res.status(400).json({
                erro: 'O ID deve ser um número válido!'
            });
        }

        // Busca o tipo no banco pelo ID
        const tipo = await TiposModel.encontreUm(id);

        // Se nao encontrar o tipo, retorna um erro 404
        if (!tipo) {
            return res.status(404).json({
                erro: 'Tipo não encontrado!',
                id: id
            });
        }

        // Retorna o tipo de pet encontrado
        res.status(200).json({
            mensagem: 'Tipo encontrado por ID',
            tipo
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar tipo por ID',
            detalhes: error.message
        });
    }
}

// Cria um novo tipo de pet
export const criar = async (req, res) => {
    try {
        const dado = req.body;

        // Regra de negocio: verifica se todos os campos obrigatorios foram fornecidos
        const camposObrigatorios = ['nome_tipo', 'especie', 'imageUrl'];
        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Campos obrigatórios faltando: ${faltando.join(', ')}`
            });
        }

        // Regra de negocio: verifica se a especie fornecida é uma das permitidas
        const especiesPermitidas = ['cachorro', 'gato', 'coelho', 'pássaro', 'hamster'];

        if (!especiesPermitidas.includes(dado.especie.toLowerCase())) {
            return res.status(400).json({
                erro: `Espécie deve ser uma das opções: ${especiesPermitidas.join(', ')}`
            });
        }

        const novoTipo = await TiposModel.criar(dado);

        res.status(201).json({
            mensagem: 'Tipo criado com sucesso!',
            tipo: novoTipo
        });

    } catch (error) {

        // Regra de negocio: tratamento de erro para um tipo que já existe (erro de duplicidade)
        if (error.message === 'Já existe um tipo com esse nome e espécie.') {
            return res.status(400).json({
                erro: error.message
            });
        }

        res.status(500).json({
            erro: 'Erro ao criar novo tipo de pet',
            detalhes: error.message
        });
    }
    }

// Deleta um tipo de pet do banco de dados
export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        // Valida se o ID é um numero valido
        if (isNaN(id)) {
            return res.status(400).json({
                erro: 'O ID deve ser um número válido'
            });
        }

        // Verifica se o tipo de pet existe antes de tentar deletar
        const tipo = await TiposModel.encontreUm(id);

        if (!tipo) {
            return res.status(404).json({
                erro: 'Tipo não encontrado para deletar',
                id: id
            });
        }

        await TiposModel.deletar(id);

        res.status(200).json({
            mensagem: 'Tipo deletado com sucesso',
            tipoRemovido: tipo
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao deletar tipo',
            detalhes: error.message
        });
    }
}

// Atualiza um tipo de pet existente
export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dado = req.body;

        //Verifica se o ID é um numero valido
        if (isNaN(id)) {
            return res.status(400).json({
                erro: 'O ID deve ser um número válido!'
            });
        }

        const tipoExiste = await TiposModel.encontreUm(id);

        // Verifica se o ID que o adm quer editar existe 
        if (!tipoExiste) {
            return res.status(404).json({
                erro: 'Tipo não encontrado para atualizar',
                id: id
            });
        }

        const tipoAtualizado = await TiposModel.atualizar(id, dado);

        res.status(200).json({
            mensagem: 'Tipo atualizado com sucesso',
            tipoAtualizado
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar tipo!',
            detalhes: error.message
        })
    }
}