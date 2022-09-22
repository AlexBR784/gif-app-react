/**Funciona con un Custom Hook */

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')

describe('GifGrid', () => { 
    const cat = "One Punch";

    test('Debe de mostrar el Cargando..., inicialmente', ()=>{

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={cat} />)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(cat))
    })

    test('Debe de mostrar imagenes cuando se cargue el div', () => {
        
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'http://example.com',
        },
        {
            id: 'ABC1',
            title: 'Saitama1',
            url: 'http://example1.com',
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        
        render(<GifGrid category={cat} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    });

 })