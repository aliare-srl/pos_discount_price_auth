# -*- coding: utf-8 -*-


{
    'name': 'POS Discount Price Auth',
    'version': '1.0',
    'category': 'Hidden',
    'sequence': 6,
    'summary': 'TIKCE',
    'description': """

""",
    'depends': ['point_of_sale'],
    'data': [
        'views/pos_config_views.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_discount_price_auth/static/src/js/Screens/ProductScreen/ProductScreen.js',
        ],
        'web.assets_qweb': [
            # 'pos_ticket_fel/static/src/xml/**/*',
        ],
    },
    'license': 'LGPL-3',

    'installable': True,
    'auto_install': False,
}
