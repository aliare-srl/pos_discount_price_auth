odoo.define('pos_discount_price_auth.ProductScreen', function (require) {
"use strict";

    var ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    const PosdiscountPriceProductScreen = ProductScreen => class extends ProductScreen {
        _setValue(val) {
            if (this.currentOrder.get_selected_orderline()) {
                if (this.state.numpadMode === 'quantity') {
                    super._setValue(val);
                }else if (this.state.numpadMode === 'discount'){

                    var user_auth_id = this.env.pos.config.user_auth_id
                    if (user_auth_id){
                        console.log(this.env.pos.user.id)
                        console.log(user_auth_id)
                        if (this.env.pos.user.id != user_auth_id[0]){
                          this.showPopup('ErrorPopup', {
                              title: this.env._t('Error en permisos'),
                              body: this.env._t('No tiene permisos para aplicar descuentos.'),
                          });
                        }else{

                            super._setValue(val);
                        }

                    }

                } else if (this.state.numpadMode === 'price'){

                  var user_auth_id = this.env.pos.config.user_auth_id
                  if (user_auth_id){
                      if (this.env.pos.user.id != user_auth_id[0]){
                        this.showPopup('ErrorPopup', {
                            title: this.env._t('Error en permisos'),
                            body: this.env._t('No tiene permisos para aplicar precios.'),
                        });
                      }else{

                          super._setValue(val);
                      }

                  }
                }
            }
        }
    };

    Registries.Component.extend(ProductScreen, PosdiscountPriceProductScreen);

});
