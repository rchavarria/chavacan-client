describe('Navigation Bar', function() { 

  var checkActive = function (tabIndex) {
    var totalTabs = 8;

    for(var i = 1; i <= totalTabs; i++) {
      var elementSelector = '.nav li:nth-child(' + i + ')';
      if (i === tabIndex) {
        expect(element(elementSelector).attr('class')).toContain('active');
      } else {
        expect(element(elementSelector).attr('class')).not().toBeDefined();
      }
    }
  };

  it('selects "Home" if location is /', function() { 
    browser().navigateTo('/'); 
    expect(browser().location().path()).toBe('/'); 

    checkActive(1);
  });

  it('selects "Alquileres" if location is /rentings', function() { 
    browser().navigateTo('/#/rentings'); 
    expect(browser().location().path()).toBe('/rentings');

    checkActive(2);
  });

  it('selects "Ventas" if location is /sales', function() { 
    browser().navigateTo('/#/sales'); 
    expect(browser().location().path()).toBe('/sales');

    checkActive(3);
  });

  it('selects "Servicios Inmoviliarios" if location is /services', function() { 
    browser().navigateTo('/#/services'); 
    expect(browser().location().path()).toBe('/services');

    checkActive(4);
  });

  it('selects "Quiere vender" if location is /wanttosell', function() { 
    browser().navigateTo('/#/wanttosell'); 
    expect(browser().location().path()).toBe('/wanttosell');

    checkActive(5);
  });

  it('selects "Destacados" if location is /highlights', function() { 
    browser().navigateTo('/#/highlights'); 
    expect(browser().location().path()).toBe('/highlights');

    checkActive(6);
  });

  it('selects "About" if location is /about', function() { 
    browser().navigateTo('/#/about'); 
    expect(browser().location().path()).toBe('/about');

    checkActive(7);
  });

  it('selects "Contact" if location is /contact', function() { 
    browser().navigateTo('/#/contact'); 
    expect(browser().location().path()).toBe('/contact');

    checkActive(8);
  });
});
