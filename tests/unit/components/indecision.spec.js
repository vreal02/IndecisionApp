import Indecision from '@/components/Indecision'
import { shallowMount } from '@vue/test-utils'

describe('Indecision Component', () => {
    test('Debe hacer match con el snapshot', () => {
        const estructura = shallowMount( Indecision )
        expect(estructura.html()).toMatchSnapshot()
    })
})