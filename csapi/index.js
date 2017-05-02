var router = require('express').Router();

router.get('/prime/factors/:num', function(req, res) {

    //execution time start
    var start = new Date().getTime(),
        status,
        end;

    //prime check
    try{
        if(isNaN(req.params.num)){
            throw('param must be a number')
        }
        if(req.params.num > 100000000){
            throw('number must be less than 100000000')
        }
        var factors = function(n){
            var factors = [],
            divisor = 2;

            while(n>2){
                if(n % divisor === 0){
                    if (factors.indexOf(divisor) === -1) {
                        factors.push(divisor);
                    }
                    n= n/ divisor;
                }else{
                    divisor++;
                }
            }
            return factors;
        }(req.params.num)
        status = 'success';

    }catch(e){
        status = 'Failed: '+e;
    }

    //execution time end
    end = new Date().getTime();

    res.json({
        'status': status,
        'factors': factors,
        'executionTime': end - start
    });

});

router.get('/prime/:num', function(req, res) {

    try{
        if(isNaN(req.params.num)){
            throw('param must be a number')
        }
        if(req.params.num > 100000000){
            throw('number must be less than 100000000')
        }
        //execution time start
        var start = new Date().getTime(),
            end,
            status;

        //prime check
        var isPrime = function(n){
            var divisor = 2;
            //loop from 2 to the number and test modulus
            while (n > divisor){
                //if remainder is zero its not prime
                if(n % divisor === 0){
                    return false;
                }else{
                    divisor++;
                }
            }
            //if nothing between 2 and the number was divisible, then it's prime
            return true;

        }(req.params.num)

        //execution time end
        end = new Date().getTime();
        status = 'success'

    }catch(e){
        status = 'Failed: '+e
    }

    res.json({
        'status': status,
        'isPrime': isPrime,
        'executionTime': end - start
    });

});

router.get('/fibonacci/:one?/:two?/:n?', function(req, res) {

    try{
        function fibonacci(n){
            var fibo = [0, 1];

            if (n <= 2) return 1;

            for (var i = 2; i <=n; i++ ){
                fibo[i] = fibo[i-1]+fibo[i-2];
            }

            return fibo[n];
        }
    }catch(e){

    }

  res.json({
      nfibonacci: 'coming soon'
  });

});


module.exports = router;
