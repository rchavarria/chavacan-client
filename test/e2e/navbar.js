describe('Navigation Bar', function() { 

  it('selects "Home" if location is /', function() { 
    browser().navigateTo('/'); 
    expect(browser().location().path()).toBe('/'); 

    expect(element('.nav li:nth-child(1)').attr('class')).toContain('active'); 
    expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined();
    expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(4)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(5)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(6)').attr('class')).not().toBeDefined(); 
  });

  it('selects "Alquileres" if location is /rentings', function() { 
    browser().navigateTo('/#/rentings'); 
    expect(browser().location().path()).toBe('/rentings');

    expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();
    expect(element('.nav li:nth-child(2)').attr('class')).toContain('active'); 
    expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(4)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(5)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(6)').attr('class')).not().toBeDefined(); 
  });

  it('selects "Ventas" if location is /sales', function() { 
    browser().navigateTo('/#/sales'); 
    expect(browser().location().path()).toBe('/sales');

    expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();
    expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(3)').attr('class')).toContain('active'); 
    expect(element('.nav li:nth-child(4)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(5)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(6)').attr('class')).not().toBeDefined(); 
  });

  it('selects "Servicios Inmoviliarios" if location is /services', function() { 
    browser().navigateTo('/#/services'); 
    expect(browser().location().path()).toBe('/services');

    expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();
    expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(4)').attr('class')).toContain('active'); 
    expect(element('.nav li:nth-child(5)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(6)').attr('class')).not().toBeDefined(); 
  });

  it('selects "About" if location is /about', function() { 
    browser().navigateTo('/#/about'); 
    expect(browser().location().path()).toBe('/about');

    expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();
    expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(4)').attr('class')).toContain('active'); 
    expect(element('.nav li:nth-child(5)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(6)').attr('class')).not().toBeDefined(); 
  });

  it('selects "Contact" if location is /contact', function() { 
    browser().navigateTo('/#/contact'); 

    expect(browser().location().path()).toBe('/contact'); 
    expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();
    expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(4)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(5)').attr('class')).not().toBeDefined(); 
    expect(element('.nav li:nth-child(6)').attr('class')).toContain('active'); 
  });
});
