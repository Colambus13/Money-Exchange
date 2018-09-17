module.exports = function makeExchange(currency) {

    var currency_money = currency,
        template_money = {"H": 50,"Q": 25,"D": 10,"N": 5,"P": 1},
        output_obj = {},
        currency_nominal, current_value;

    for (type_money in template_money) {

        currency_nominal = template_money[type_money];
        current_value = Math.trunc(currency_money/currency_nominal);

        if(current_value === 0){
            continue;
        }else{
            output_obj[type_money] = current_value;
            currency_money %= currency_nominal;
        }

    }

    if (currency <= 0) {
        return {};
    }
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    return output_obj;
};