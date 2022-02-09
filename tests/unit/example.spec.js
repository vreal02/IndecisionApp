describe( 'Example Component', () => {
  test('Debe ser mayor a 10', () => {
    
    //arreglar
    let valor = 5

    //estímulo
    valor += 6

    expect(valor).toBeGreaterThan(10)
  })
})
