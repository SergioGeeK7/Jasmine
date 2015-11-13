describe('Modulo app.cars', function () {

    beforeEach(function () {
        module('app.cars'); // importa el modulo
    });

    describe('Cars service', function () {

        var carsService;

        beforeEach(function () {
            inject(['CarsService', function (service) {
                    carsService = service;
                }
            ]);
        });

        it('debe devolver una lista de dos coches', function () {
            var cars = carsService.getAll();
            expect(cars).toBeDefined();
            expect(cars.length).toBe(2);
        });

    });
});
