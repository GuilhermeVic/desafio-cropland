const { Op } = require('sequelize');
const db = require('../Models/db')
const Entidade = require('../Models/RegistrosModel');
const sequelize = require('../Models/db');

exports.buscarTudo = async function (req, res) {
    const data = await Entidade.findAll();
    return res.status(200).json(data?data:[]);
}

exports.salvar = async function (req, res) {
    const tr = await sequelize.transaction();
    console.log(req.body);
    try {
        const {descricao, tipo, vencimento, valor} = req.body;
        const data = await Entidade.create({
            descricao,
            tipo,
            vencimento,
            valor
        }, {
            transaction: tr
        });
        await tr.commit();
        return res.status(200).json(data);
    }catch (e) {  
        console.log(e);      
        return res.status(400).json(e);
    }
}

exports.alterar = async function (req, res) {
    const tr = await sequelize.transaction();
    try{
        const {id} = req.params;
        const {descricao, tipo, vencimento, valor} = await req.body;
        let entidade = await Entidade.findByPk(id);
        if (!entidade) {
            return res.status(400).json({mensagem: `Registro não encontrado id:${id}`});
        }
        await Entidade.update(
            {descricao, tipo, vencimento, valor},
            {
                transaction: tr,
                where: {
                    id: id
                }
            }
        );
        await tr.commit();
        return res.status(200).json({mensagem: 'Alterado com sucesso.'})
    } catch (e) {
        return res.status(400).json(e);
    }
}

exports.deletar = async function (req, res) {
    const tr = await sequelize.transaction();
    try {
        const {id} = req.params;
        let entidade = await Entidade.findByPk(id);
        if(!entidade) {
            return res.status(400).json({mensagem: `Registro não encontrado id:${id}`});
        }
        await Entidade.destroy({
            transaction: tr,
            where: {
                id: id
            }
        });
        await tr.commit();
        return res.status(200).json({mensagem: 'Deletado com sucesso.'})
    } catch (e) {
        return res.status(400).json(e);
    }
}