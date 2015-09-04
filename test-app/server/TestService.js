angular.module('test-app').service('TestDataService', function($http, $q) {
  this.getCompanyData = function () {

    var deferred = $q.defer();


    //  $http.jsonp('https://www.quandl.com/api/v1/datasets/FED/RIFSPDCNSM03_N_B.json?callback=JSON_CALLBACK').
    // success(function(data, status, headers, config) {
    //     deferred.resolve(data);
    // }).
    // error(function(data, status, headers, config) {
    // 	console.log(data);
    // });

	// $.ajax({
	//     url: 'https://www.quandl.com/api/v1/datasets/ABMI/INVESTOR_CI_HHI_CHN.json',
	//     dataType: 'JSONP',
	//     jsonpCallback: 'callback',
	//     jsonp: false,
	//     type: 'GET',
	//     success: function (data) {
	//         deferred.resolve(data);
	//     }
	// });

 //        deferred.resolve(data);

 var data = {
    		data: [["2015-07-01",4.15],["2015-06-01",4.19],["2015-05-01",3.98],["2015-04-01",3.52],["2015-03-01",3.64],["2015-02-01",3.61],["2015-01-01",3.46],["2014-12-01",3.79],["2014-11-01",3.92],["2014-10-01",3.92],["2014-09-01",4.11],["2014-08-01",4.08],["2014-07-01",4.16],["2014-06-01",4.25],["2014-05-01",4.16],["2014-04-01",4.24],["2014-03-01",4.38],["2014-02-01",4.45],["2014-01-01",4.49],["2013-12-01",4.62],["2013-11-01",4.63],["2013-10-01",4.53],["2013-09-01",4.64],["2013-08-01",4.54],["2013-07-01",4.34],["2013-06-01",4.27],["2013-05-01",3.89],["2013-04-01",3.73],["2013-03-01",3.93],["2013-02-01",3.9],["2013-01-01",3.8],["2012-12-01",3.65],["2012-11-01",3.5],["2012-10-01",3.47],["2012-09-01",3.49],["2012-08-01",3.48],["2012-07-01",3.4],["2012-06-01",3.64],["2012-05-01",3.8],["2012-04-01",3.96],["2012-03-01",3.99],["2012-02-01",3.85],["2012-01-01",3.85],["2011-12-01",3.93],["2011-11-01",3.87],["2011-10-01",3.98],["2011-09-01",4.09],["2011-08-01",4.37],["2011-07-01",4.93],["2011-06-01",4.99],["2011-05-01",4.96],["2011-04-01",5.16],["2011-03-01",5.13],["2011-02-01",5.22],["2011-01-01",5.04],["2010-12-01",5.02],["2010-11-01",4.87],["2010-10-01",4.68],["2010-09-01",4.53],["2010-08-01",4.49],["2010-07-01",4.72],["2010-06-01",4.88],["2010-05-01",4.96],["2010-04-01",5.29],["2010-03-01",5.27],["2010-02-01",5.35],["2010-01-01",5.26],["2009-12-01",5.26],["2009-11-01",5.19],["2009-10-01",5.15],["2009-09-01",5.13],["2009-08-01",5.26],["2009-07-01",5.41],["2009-06-01",5.61],["2009-05-01",5.54],["2009-04-01",5.39],["2009-03-01",5.5],["2009-02-01",5.27],["2009-01-01",5.05],["2008-12-01",5.05],["2008-11-01",6.12],["2008-10-01",6.28],["2008-09-01",5.65],["2008-08-01",5.64],["2008-07-01",5.67],["2008-06-01",5.68],["2008-05-01",5.57],["2008-04-01",5.55],["2008-03-01",5.51],["2008-02-01",5.53],["2008-01-01",5.33],["2007-12-01",5.49],["2007-11-01",5.44],["2007-10-01",5.66],["2007-09-01",5.74],["2007-08-01",5.79],["2007-07-01",5.73],["2007-06-01",5.79],["2007-05-01",5.47],["2007-04-01",5.47],["2007-03-01",5.3],["2007-02-01",5.39],["2007-01-01",5.4],["2006-12-01",5.32],["2006-11-01",5.33],["2006-10-01",5.51],["2006-09-01",5.51],["2006-08-01",5.68],["2006-07-01",5.85],["2006-06-01",5.89],["2006-05-01",5.95],["2006-04-01",5.84],["2006-03-01",5.53],["2006-02-01",5.35],["2006-01-01",5.29],["2005-12-01",5.37],["2005-11-01",5.42],["2005-10-01",5.35],["2005-09-01",5.13],["2005-08-01",5.09],["2005-07-01",5.06],["2005-06-01",4.96],["2005-05-01",5.15],["2005-04-01",5.33],["2005-03-01",5.4],["2005-02-01",5.2],["2005-01-01",5.36],["2004-12-01",5.47],["2004-11-01",5.52],["2004-10-01",5.47],["2004-09-01",5.46],["2004-08-01",5.65],["2004-07-01",5.82],["2004-06-01",6.01],["2004-05-01",6.04],["2004-04-01",5.73],["2004-03-01",5.33],["2004-02-01",5.5],["2004-01-01",5.54],["2003-12-01",5.62],["2003-11-01",5.65],["2003-10-01",5.7],["2003-09-01",5.72],["2003-08-01",5.88],["2003-07-01",5.49],["2003-06-01",4.97],["2003-05-01",5.22],["2003-04-01",5.74],["2003-03-01",5.89],["2003-02-01",5.95],["2003-01-01",6.17],["2002-12-01",6.21],["2002-11-01",6.31],["2002-10-01",6.32],["2002-09-01",6.15],["2002-08-01",6.37],["2002-07-01",6.53],["2002-06-01",6.63],["2002-05-01",6.75],["2002-04-01",6.76],["2002-03-01",6.81],["2002-02-01",6.51],["2002-01-01",6.55],["2001-12-01",6.77],["2001-11-01",6.97],["2001-10-01",7.03],["2001-09-01",7.17],["2001-08-01",7.02],["2001-07-01",7.13],["2001-06-01",7.18],["2001-05-01",7.29],["2001-04-01",7.2],["2001-03-01",6.98],["2001-02-01",7.1],["2001-01-01",7.15],["2000-12-01",7.21],["2000-11-01",7.45],["2000-10-01",7.55],["2000-09-01",7.62],["2000-08-01",7.55],["2000-07-01",7.65],["2000-06-01",7.67],["2000-05-01",7.99],["2000-04-01",7.64],["2000-03-01",7.68],["2000-02-01",7.68],["2000-01-01",7.78],["1999-12-01",7.55],["1999-11-01",7.36],["1999-10-01",7.55],["1999-09-01",7.39],["1999-08-01",7.4],["1999-07-01",7.19],["1999-06-01",7.23],["1999-05-01",6.93],["1999-04-01",6.64],["1999-03-01",6.62],["1999-02-01",6.4],["1999-01-01",6.24],["1998-12-01",6.22],["1998-11-01",6.41],["1998-10-01",6.37],["1998-09-01",6.4],["1998-08-01",6.52],["1998-07-01",6.55],["1998-06-01",6.53],["1998-05-01",6.69],["1998-04-01",6.69],["1998-03-01",6.72],["1998-02-01",6.67],["1998-01-01",6.61],["1997-12-01",6.76],["1997-11-01",6.87],["1997-10-01",7.0],["1997-09-01",7.15],["1997-08-01",7.22],["1997-07-01",7.14],["1997-06-01",7.41],["1997-05-01",7.58],["1997-04-01",7.73],["1997-03-01",7.55],["1997-02-01",7.31],["1997-01-01",7.42],["1996-12-01",7.2],["1996-11-01",7.1],["1996-10-01",7.39],["1996-09-01",7.66],["1996-08-01",7.46],["1996-07-01",7.65],["1996-06-01",7.71],["1996-05-01",7.62],["1996-04-01",7.5],["1996-03-01",7.35],["1996-02-01",6.99],["1996-01-01",6.81],["1995-12-01",6.82],["1995-11-01",7.02],["1995-10-01",7.12],["1995-09-01",7.32],["1995-08-01",7.57],["1995-07-01",7.41],["1995-06-01",7.3],["1995-05-01",7.65],["1995-04-01",8.03],["1995-03-01",8.12],["1995-02-01",8.26],["1995-01-01",8.46],["1994-12-01",8.46],["1994-11-01",8.68],["1994-10-01",8.57],["1994-09-01",8.34],["1994-08-01",8.07],["1994-07-01",8.11],["1994-06-01",7.97],["1994-05-01",7.99],["1994-04-01",7.88],["1994-03-01",7.48],["1994-02-01",7.08],["1994-01-01",6.92],["1993-12-01",6.93],["1993-11-01",6.93],["1993-10-01",6.67],["1993-09-01",6.66],["1993-08-01",6.85],["1993-07-01",7.17],["1993-06-01",7.33],["1993-05-01",7.43],["1993-04-01",7.46],["1993-03-01",7.58],["1993-02-01",7.71],["1993-01-01",7.91],["1992-12-01",7.98],["1992-11-01",8.1],["1992-10-01",7.99],["1992-09-01",7.92],["1992-08-01",7.95],["1992-07-01",8.07],["1992-06-01",8.22],["1992-05-01",8.28],["1992-04-01",8.33],["1992-03-01",8.35],["1992-02-01",8.29],["1992-01-01",8.2],["1991-12-01",8.31],["1991-11-01",8.48],["1991-10-01",8.55],["1991-09-01",8.61],["1991-08-01",8.75],["1991-07-01",9.0],["1991-06-01",9.01],["1991-05-01",8.86],["1991-04-01",8.86],["1991-03-01",8.93],["1991-02-01",8.83],["1991-01-01",9.04],["1990-12-01",9.05],["1990-11-01",9.3],["1990-10-01",9.53],["1990-09-01",9.56],["1990-08-01",9.41],["1990-07-01",9.24],["1990-06-01",9.26],["1990-05-01",9.47],["1990-04-01",9.46],["1990-03-01",9.37],["1990-02-01",9.22],["1990-01-01",8.99],["1989-12-01",8.86],["1989-11-01",8.89],["1989-10-01",8.92],["1989-09-01",9.01],["1989-08-01",8.96],["1989-07-01",8.93],["1989-06-01",9.1],["1989-05-01",9.57],["1989-04-01",9.79],["1989-03-01",9.8],["1989-02-01",9.64],["1989-01-01",9.62],["1988-12-01",9.57],["1988-11-01",9.45],["1988-10-01",9.51],["1988-09-01",9.82],["1988-08-01",10.11],["1988-07-01",9.96],["1988-06-01",9.86],["1988-05-01",9.9],["1988-04-01",9.67],["1988-03-01",9.39],["1988-02-01",9.4],["1988-01-01",9.88],["1987-12-01",10.11],["1987-11-01",10.01],["1987-10-01",10.52],["1987-09-01",10.18],["1987-08-01",9.67],["1987-07-01",9.42],["1987-06-01",9.32],["1987-05-01",9.33],["1987-04-01",8.85],["1987-03-01",8.36],["1987-02-01",8.38],["1987-01-01",8.36],["1986-12-01",8.49],["1986-11-01",8.68],["1986-10-01",8.86],["1986-09-01",8.89],["1986-08-01",8.72],["1986-07-01",8.88],["1986-06-01",9.13],["1986-05-01",9.09],["1986-04-01",8.79],["1986-03-01",9.0],["1986-02-01",9.67],["1986-01-01",10.05],["1985-12-01",10.16],["1985-11-01",10.55],["1985-10-01",11.02],["1985-09-01",11.07],["1985-08-01",11.05],["1985-07-01",10.97],["1985-06-01",10.94],["1985-05-01",11.72],["1985-04-01",12.23],["1985-03-01",12.56],["1985-02-01",12.13],["1985-01-01",12.08],["1984-12-01",12.13],["1984-11-01",12.29],["1984-10-01",12.63],["1984-09-01",12.66],["1984-08-01",12.87],["1984-07-01",13.44],["1984-06-01",13.55],["1984-05-01",13.28],["1984-04-01",12.81],["1984-03-01",12.57],["1984-02-01",12.08],["1984-01-01",12.2],["1983-12-01",12.57],["1983-11-01",12.41],["1983-10-01",12.25],["1983-09-01",12.37],["1983-08-01",12.51],["1983-07-01",12.15],["1983-06-01",11.74],["1983-05-01",11.46],["1983-04-01",11.51],["1983-03-01",11.73],["1983-02-01",12.01],["1983-01-01",11.79],["1982-12-01",11.83],["1982-11-01",11.68],["1982-10-01",12.12],["1982-09-01",12.94],["1982-08-01",13.71],["1982-07-01",14.61],["1982-06-01",14.81],["1982-05-01",14.26],["1982-04-01",14.46],["1982-03-01",14.58],["1982-02-01",15.27],["1982-01-01",15.18],["1981-12-01",14.23],["1981-11-01",14.22],["1981-10-01",15.4],["1981-09-01",15.49],["1981-08-01",14.89],["1981-07-01",14.38],["1981-06-01",13.75],["1981-05-01",14.32],["1981-04-01",13.88],["1981-03-01",13.33],["1981-02-01",13.35],["1981-01-01",12.81],["1980-12-01",13.21],["1980-11-01",12.97],["1980-10-01",12.31],["1980-09-01",12.02],["1980-08-01",11.64],["1980-07-01",11.07],["1980-06-01",10.58],["1980-05-01",10.99],["1980-04-01",12.04],["1980-03-01",12.96],["1980-02-01",12.38],["1980-01-01",11.09],["1979-12-01",10.74],["1979-11-01",10.76],["1979-10-01",10.13],["1979-09-01",9.44],["1979-08-01",9.23],["1979-07-01",9.2],["1979-06-01",9.29],["1979-05-01",9.5],["1979-04-01",9.38],["1979-03-01",9.37],["1979-02-01",9.26],["1979-01-01",9.25],["1978-12-01",9.16],["1978-11-01",9.03],["1978-10-01",8.89],["1978-09-01",8.69],["1978-08-01",8.69],["1978-07-01",8.88],["1978-06-01",8.76],["1978-05-01",8.69],["1978-04-01",8.56],["1978-03-01",8.47],["1978-02-01",8.47],["1978-01-01",8.41],["1977-12-01",8.19],["1977-11-01",8.08],["1977-10-01",8.04],["1977-09-01",7.92],["1977-08-01",7.98],["1977-07-01",7.94],["1977-06-01",7.95],["1977-05-01",8.05],["1977-04-01",8.04],["1977-03-01",8.1],["1977-02-01",8.04],["1977-01-01",7.96],["1976-12-01",7.98],["1976-11-01",8.25],["1976-10-01",8.32],["1976-09-01",8.38],["1976-08-01",8.45],["1976-07-01",8.56],["1976-06-01",8.62],["1976-05-01",8.58],["1976-04-01",8.4],["1976-03-01",8.52],["1976-02-01",8.55],["1976-01-01",8.6],["1975-12-01",8.79],["1975-11-01",8.78],["1975-10-01",8.86],["1975-09-01",8.95],["1975-08-01",8.95],["1975-07-01",8.84],["1975-06-01",8.77],["1975-05-01",8.9],["1975-04-01",8.95],["1975-03-01",8.67],["1975-02-01",8.62],["1975-01-01",8.83],["1974-12-01",8.89],["1974-11-01",8.89],["1974-10-01",9.27],["1974-09-01",9.24],["1974-08-01",9.0],["1974-07-01",8.72],["1974-06-01",8.47],["1974-05-01",8.37],["1974-04-01",8.25],["1974-03-01",8.01],["1974-02-01",7.85],["1974-01-01",7.83],["1973-12-01",7.68],["1973-11-01",7.67],["1973-10-01",7.6],["1973-09-01",7.63],["1973-08-01",7.68],["1973-07-01",7.45],["1973-06-01",7.37],["1973-05-01",7.29],["1973-04-01",7.26],["1973-03-01",7.29],["1973-02-01",7.22],["1973-01-01",7.15],["1972-12-01",7.08],["1972-11-01",7.12],["1972-10-01",7.21],["1972-09-01",7.22],["1972-08-01",7.19],["1972-07-01",7.21],["1972-06-01",7.23],["1972-05-01",7.3],["1972-04-01",7.3],["1972-03-01",7.24],["1972-02-01",7.27],["1972-01-01",7.19],["1971-12-01",7.25],["1971-11-01",7.26],["1971-10-01",7.39],["1971-09-01",7.44],["1971-08-01",7.59],["1971-07-01",7.64],["1971-06-01",7.64],["1971-05-01",7.53],["1971-04-01",7.25],["1971-03-01",7.21],["1971-02-01",7.08],["1971-01-01",7.36],["1970-12-01",7.64],["1970-11-01",8.05],["1970-10-01",8.03],["1970-09-01",8.09],["1970-08-01",8.13],["1970-07-01",8.44],["1970-06-01",8.48],["1970-05-01",8.11],["1970-04-01",7.83],["1970-03-01",7.84],["1970-02-01",7.93],["1970-01-01",7.91],["1969-12-01",7.72],["1969-11-01",7.35],["1969-10-01",7.33],["1969-09-01",7.14],["1969-08-01",6.97],["1969-07-01",7.08],["1969-06-01",6.98],["1969-05-01",6.79],["1969-04-01",6.89],["1969-03-01",6.85],["1969-02-01",6.66],["1969-01-01",6.59],["1968-12-01",6.45],["1968-11-01",6.19],["1968-10-01",6.09],["1968-09-01",5.97],["1968-08-01",6.02],["1968-07-01",6.24],["1968-06-01",6.28],["1968-05-01",6.27],["1968-04-01",6.21],["1968-03-01",6.11],["1968-02-01",6.1],["1968-01-01",6.17],["1967-12-01",6.19],["1967-11-01",6.07],["1967-10-01",5.82],["1967-09-01",5.65],["1967-08-01",5.62],["1967-07-01",5.58],["1967-06-01",5.44],["1967-05-01",5.24],["1967-04-01",5.11],["1967-03-01",5.13],["1967-02-01",5.03],["1967-01-01",5.2],["1966-12-01",5.39],["1966-11-01",5.35],["1966-10-01",5.41],["1966-09-01",5.49],["1966-08-01",5.31],["1966-07-01",5.16],["1966-06-01",5.07],["1966-05-01",4.98],["1966-04-01",4.96],["1966-03-01",4.92],["1966-02-01",4.78],["1966-01-01",4.74],["1965-12-01",4.68],["1965-11-01",4.6],["1965-10-01",4.56],["1965-09-01",4.52],["1965-08-01",4.49],["1965-07-01",4.48],["1965-06-01",4.46],["1965-05-01",4.44],["1965-04-01",4.43],["1965-03-01",4.42],["1965-02-01",4.41],["1965-01-01",4.43],["1964-12-01",4.44],["1964-11-01",4.43],["1964-10-01",4.42],["1964-09-01",4.42],["1964-08-01",4.41],["1964-07-01",4.4],["1964-06-01",4.41],["1964-05-01",4.41],["1964-04-01",4.4],["1964-03-01",4.38],["1964-02-01",4.36],["1964-01-01",4.39],["1963-12-01",4.35],["1963-11-01",4.33],["1963-10-01",4.32],["1963-09-01",4.31],["1963-08-01",4.29],["1963-07-01",4.26],["1963-06-01",4.23],["1963-05-01",4.22],["1963-04-01",4.21],["1963-03-01",4.19],["1963-02-01",4.19],["1963-01-01",4.21],["1962-12-01",4.24],["1962-11-01",4.25],["1962-10-01",4.28],["1962-09-01",4.32],["1962-08-01",4.35],["1962-07-01",4.34],["1962-06-01",4.28],["1962-05-01",4.28],["1962-04-01",4.33],["1962-03-01",4.39],["1962-02-01",4.42],["1962-01-01",4.42],["1961-12-01",4.42],["1961-11-01",4.39],["1961-10-01",4.42],["1961-09-01",4.45],["1961-08-01",4.45],["1961-07-01",4.41],["1961-06-01",4.33],["1961-05-01",4.27],["1961-04-01",4.25],["1961-03-01",4.22],["1961-02-01",4.27],["1961-01-01",4.32],["1960-12-01",4.35],["1960-11-01",4.31],["1960-10-01",4.3],["1960-09-01",4.25],["1960-08-01",4.28],["1960-07-01",4.41],["1960-06-01",4.45],["1960-05-01",4.46],["1960-04-01",4.45],["1960-03-01",4.49],["1960-02-01",4.56],["1960-01-01",4.61],["1959-12-01",4.58],["1959-11-01",4.56],["1959-10-01",4.57],["1959-09-01",4.52],["1959-08-01",4.43],["1959-07-01",4.47],["1959-06-01",4.46],["1959-05-01",4.37],["1959-04-01",4.23],["1959-03-01",4.13],["1959-02-01",4.14],["1959-01-01",4.12],["1958-12-01",4.08],["1958-11-01",4.09],["1958-10-01",4.11],["1958-09-01",4.09],["1958-08-01",3.85],["1958-07-01",3.67],["1958-06-01",3.57],["1958-05-01",3.57],["1958-04-01",3.6],["1958-03-01",3.63],["1958-02-01",3.59],["1958-01-01",3.6],["1957-12-01",3.81],["1957-11-01",4.08],["1957-10-01",4.1],["1957-09-01",4.12],["1957-08-01",4.1],["1957-07-01",3.99],["1957-06-01",3.91],["1957-05-01",3.74],["1957-04-01",3.67],["1957-03-01",3.66],["1957-02-01",3.67],["1957-01-01",3.77],["1956-12-01",3.75],["1956-11-01",3.69],["1956-10-01",3.59],["1956-09-01",3.56],["1956-08-01",3.43],["1956-07-01",3.28],["1956-06-01",3.26],["1956-05-01",3.28],["1956-04-01",3.24],["1956-03-01",3.1],["1956-02-01",3.08],["1956-01-01",3.11],["1955-12-01",3.15],["1955-11-01",3.1],["1955-10-01",3.1],["1955-09-01",3.13],["1955-08-01",3.11],["1955-07-01",3.06],["1955-06-01",3.05],["1955-05-01",3.04],["1955-04-01",3.01],["1955-03-01",3.02],["1955-02-01",2.93],["1955-01-01",2.93],["1954-12-01",2.9],["1954-11-01",2.89],["1954-10-01",2.87],["1954-09-01",2.89],["1954-08-01",2.87],["1954-07-01",2.89],["1954-06-01",2.9],["1954-05-01",2.88],["1954-04-01",2.85],["1954-03-01",2.86],["1954-02-01",2.95],["1954-01-01",3.06],["1953-12-01",3.13],["1953-11-01",3.11],["1953-10-01",3.16],["1953-09-01",3.29],["1953-08-01",3.24],["1953-07-01",3.28],["1953-06-01",3.4],["1953-05-01",3.34],["1953-04-01",3.23],["1953-03-01",3.12],["1953-02-01",3.07],["1953-01-01",3.02],["1952-12-01",2.97],["1952-11-01",2.98],["1952-10-01",3.01],["1952-09-01",2.95],["1952-08-01",2.94],["1952-07-01",2.95],["1952-06-01",2.94],["1952-05-01",2.93],["1952-04-01",2.93],["1952-03-01",2.96],["1952-02-01",2.93],["1952-01-01",2.98],["1951-12-01",3.01],["1951-11-01",2.96],["1951-10-01",2.89],["1951-09-01",2.84],["1951-08-01",2.88],["1951-07-01",2.94],["1951-06-01",2.94],["1951-05-01",2.89],["1951-04-01",2.87],["1951-03-01",2.78],["1951-02-01",2.66],["1951-01-01",2.66],["1950-12-01",2.67],["1950-11-01",2.67],["1950-10-01",2.67],["1950-09-01",2.64],["1950-08-01",2.61],["1950-07-01",2.65],["1950-06-01",2.62],["1950-05-01",2.61],["1950-04-01",2.6],["1950-03-01",2.58],["1950-02-01",2.58],["1950-01-01",2.57],["1949-12-01",2.58],["1949-11-01",2.6],["1949-10-01",2.61],["1949-09-01",2.6],["1949-08-01",2.62],["1949-07-01",2.67],["1949-06-01",2.71],["1949-05-01",2.71],["1949-04-01",2.7],["1949-03-01",2.7],["1949-02-01",2.71],["1949-01-01",2.71],["1948-12-01",2.79],["1948-11-01",2.84],["1948-10-01",2.84],["1948-09-01",2.84],["1948-08-01",2.84],["1948-07-01",2.81],["1948-06-01",2.76],["1948-05-01",2.76],["1948-04-01",2.78],["1948-03-01",2.83],["1948-02-01",2.85],["1948-01-01",2.86],["1947-12-01",2.86],["1947-11-01",2.77],["1947-10-01",2.7],["1947-09-01",2.61],["1947-08-01",2.56],["1947-07-01",2.55],["1947-06-01",2.55],["1947-05-01",2.53],["1947-04-01",2.53],["1947-03-01",2.55],["1947-02-01",2.55],["1947-01-01",2.57],["1946-12-01",2.61],["1946-11-01",2.59],["1946-10-01",2.6],["1946-09-01",2.58],["1946-08-01",2.51],["1946-07-01",2.48],["1946-06-01",2.49],["1946-05-01",2.51],["1946-04-01",2.46],["1946-03-01",2.47],["1946-02-01",2.48],["1946-01-01",2.54],["1945-12-01",2.61],["1945-11-01",2.62],["1945-10-01",2.62],["1945-09-01",2.62],["1945-08-01",2.61],["1945-07-01",2.6],["1945-06-01",2.61],["1945-05-01",2.62],["1945-04-01",2.61],["1945-03-01",2.62],["1945-02-01",2.65],["1945-01-01",2.69],["1944-12-01",2.7],["1944-11-01",2.72],["1944-10-01",2.72],["1944-09-01",2.72],["1944-08-01",2.71],["1944-07-01",2.72],["1944-06-01",2.73],["1944-05-01",2.73],["1944-04-01",2.74],["1944-03-01",2.74],["1944-02-01",2.74],["1944-01-01",2.72],["1943-12-01",2.74],["1943-11-01",2.71],["1943-10-01",2.7],["1943-09-01",2.69],["1943-08-01",2.69],["1943-07-01",2.69],["1943-06-01",2.72],["1943-05-01",2.74],["1943-04-01",2.76],["1943-03-01",2.76],["1943-02-01",2.77],["1943-01-01",2.79],["1942-12-01",2.81],["1942-11-01",2.79],["1942-10-01",2.8],["1942-09-01",2.8],["1942-08-01",2.81],["1942-07-01",2.83],["1942-06-01",2.85],["1942-05-01",2.85],["1942-04-01",2.83],["1942-03-01",2.86],["1942-02-01",2.85],["1942-01-01",2.83],["1941-12-01",2.8],["1941-11-01",2.72],["1941-10-01",2.73],["1941-09-01",2.75],["1941-08-01",2.74],["1941-07-01",2.74],["1941-06-01",2.77],["1941-05-01",2.81],["1941-04-01",2.82],["1941-03-01",2.8],["1941-02-01",2.78],["1941-01-01",2.75],["1940-12-01",2.71],["1940-11-01",2.75],["1940-10-01",2.79],["1940-09-01",2.82],["1940-08-01",2.85],["1940-07-01",2.88],["1940-06-01",2.96],["1940-05-01",2.93],["1940-04-01",2.82],["1940-03-01",2.84],["1940-02-01",2.86],["1940-01-01",2.88],["1939-12-01",2.94],["1939-11-01",3.0],["1939-10-01",3.15],["1939-09-01",3.25],["1939-08-01",2.93],["1939-07-01",2.89],["1939-06-01",2.92],["1939-05-01",2.97],["1939-04-01",3.02],["1939-03-01",2.99],["1939-02-01",3.0],["1939-01-01",3.01],["1938-12-01",3.08],["1938-11-01",3.1],["1938-10-01",3.15],["1938-09-01",3.21],["1938-08-01",3.18],["1938-07-01",3.22],["1938-06-01",3.26],["1938-05-01",3.22],["1938-04-01",3.3],["1938-03-01",3.22],["1938-02-01",3.2],["1938-01-01",3.17],["1937-12-01",3.21],["1937-11-01",3.24],["1937-10-01",3.27],["1937-09-01",3.28],["1937-08-01",3.24],["1937-07-01",3.25],["1937-06-01",3.28],["1937-05-01",3.33],["1937-04-01",3.42],["1937-03-01",3.32],["1937-02-01",3.22],["1937-01-01",3.1],["1936-12-01",3.1],["1936-11-01",3.15],["1936-10-01",3.18],["1936-09-01",3.18],["1936-08-01",3.21],["1936-07-01",3.23],["1936-06-01",3.24],["1936-05-01",3.27],["1936-04-01",3.29],["1936-03-01",3.29],["1936-02-01",3.32],["1936-01-01",3.37],["1935-12-01",3.44],["1935-11-01",3.47],["1935-10-01",3.52],["1935-09-01",3.59],["1935-08-01",3.6],["1935-07-01",3.56],["1935-06-01",3.61],["1935-05-01",3.65],["1935-04-01",3.66],["1935-03-01",3.67],["1935-02-01",3.69],["1935-01-01",3.77],["1934-12-01",3.81],["1934-11-01",3.86],["1934-10-01",3.9],["1934-09-01",3.96],["1934-08-01",3.93],["1934-07-01",3.89],["1934-06-01",3.93],["1934-05-01",4.01],["1934-04-01",4.07],["1934-03-01",4.13],["1934-02-01",4.2],["1934-01-01",4.35],["1933-12-01",4.5],["1933-11-01",4.54],["1933-10-01",4.34],["1933-09-01",4.36],["1933-08-01",4.3],["1933-07-01",4.36],["1933-06-01",4.46],["1933-05-01",4.63],["1933-04-01",4.78],["1933-03-01",4.68],["1933-02-01",4.48],["1933-01-01",4.44],["1932-12-01",4.59],["1932-11-01",4.63],["1932-10-01",4.64],["1932-09-01",4.7],["1932-08-01",4.91],["1932-07-01",5.26],["1932-06-01",5.41],["1932-05-01",5.36],["1932-04-01",5.17],["1932-03-01",4.98],["1932-02-01",5.23],["1932-01-01",5.2],["1931-12-01",5.32],["1931-11-01",4.94],["1931-10-01",4.99],["1931-09-01",4.55],["1931-08-01",4.4],["1931-07-01",4.36],["1931-06-01",4.36],["1931-05-01",4.37],["1931-04-01",4.4],["1931-03-01",4.39],["1931-02-01",4.43],["1931-01-01",4.42],["1930-12-01",4.52],["1930-11-01",4.47],["1930-10-01",4.42],["1930-09-01",4.42],["1930-08-01",4.47],["1930-07-01",4.52],["1930-06-01",4.57],["1930-05-01",4.6],["1930-04-01",4.6],["1930-03-01",4.62],["1930-02-01",4.69],["1930-01-01",4.66],["1929-12-01",4.67],["1929-11-01",4.76],["1929-10-01",4.77],["1929-09-01",4.8],["1929-08-01",4.79],["1929-07-01",4.77],["1929-06-01",4.77],["1929-05-01",4.7],["1929-04-01",4.69],["1929-03-01",4.7],["1929-02-01",4.66],["1929-01-01",4.62],["1928-12-01",4.61],["1928-11-01",4.58],["1928-10-01",4.61],["1928-09-01",4.61],["1928-08-01",4.64],["1928-07-01",4.61],["1928-06-01",4.57],["1928-05-01",4.49],["1928-04-01",4.46],["1928-03-01",4.46],["1928-02-01",4.46],["1928-01-01",4.46],["1927-12-01",4.46],["1927-11-01",4.49],["1927-10-01",4.51],["1927-09-01",4.54],["1927-08-01",4.56],["1927-07-01",4.6],["1927-06-01",4.58],["1927-05-01",4.57],["1927-04-01",4.58],["1927-03-01",4.62],["1927-02-01",4.67],["1927-01-01",4.66],["1926-12-01",4.68],["1926-11-01",4.68],["1926-10-01",4.71],["1926-09-01",4.72],["1926-08-01",4.72],["1926-07-01",4.71],["1926-06-01",4.72],["1926-05-01",4.71],["1926-04-01",4.74],["1926-03-01",4.79],["1926-02-01",4.77],["1926-01-01",4.82],["1925-12-01",4.85],["1925-11-01",4.84],["1925-10-01",4.85],["1925-09-01",4.87],["1925-08-01",4.9],["1925-07-01",4.87],["1925-06-01",4.83],["1925-05-01",4.83],["1925-04-01",4.87],["1925-03-01",4.91],["1925-02-01",4.95],["1925-01-01",4.95],["1924-12-01",4.95],["1924-11-01",4.94],["1924-10-01",4.92],["1924-09-01",4.95],["1924-08-01",4.95],["1924-07-01",4.95],["1924-06-01",4.99],["1924-05-01",5.04],["1924-04-01",5.08],["1924-03-01",5.1],["1924-02-01",5.09],["1924-01-01",5.09],["1923-12-01",5.09],["1923-11-01",5.09],["1923-10-01",5.11],["1923-09-01",5.12],["1923-08-01",5.08],["1923-07-01",5.14],["1923-06-01",5.15],["1923-05-01",5.16],["1923-04-01",5.22],["1923-03-01",5.13],["1923-02-01",5.07],["1923-01-01",5.04],["1922-12-01",5.08],["1922-11-01",5.09],["1922-10-01",4.97],["1922-09-01",4.93],["1922-08-01",4.96],["1922-07-01",5.0],["1922-06-01",5.08],["1922-05-01",5.13],["1922-04-01",5.15],["1922-03-01",5.23],["1922-02-01",5.29],["1922-01-01",5.34],["1921-12-01",5.5],["1921-11-01",5.6],["1921-10-01",5.84],["1921-09-01",5.93],["1921-08-01",5.99],["1921-07-01",6.12],["1921-06-01",6.18],["1921-05-01",6.11],["1921-04-01",6.06],["1921-03-01",6.08],["1921-02-01",6.08],["1921-01-01",6.14],["1920-12-01",6.26],["1920-11-01",6.08],["1920-10-01",6.05],["1920-09-01",6.22],["1920-08-01",6.3],["1920-07-01",6.34],["1920-06-01",6.38],["1920-05-01",6.25],["1920-04-01",6.04],["1920-03-01",5.92],["1920-02-01",5.86],["1920-01-01",5.75],["1919-12-01",5.73],["1919-11-01",5.66]]
    	};
        deferred.resolve(data);

    data.data.forEach(function(d) {
          d[0] = moment(d[0]).toDate();
        });

    return deferred.promise;
  };
});