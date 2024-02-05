# -*- encoding: utf-8 -*-

from odoo import models, fields, api, _

class PosConfig(models.Model):
    _inherit = 'pos.config'

    partner_auth_id = fields.Many2one('res.partner','Usuario autorizado')
