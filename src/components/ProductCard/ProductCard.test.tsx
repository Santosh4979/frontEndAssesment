import { render, screen } from "@testing-library/react";
import  ProductCard  from "./ProductCard";
import '@testing-library/jest-dom/extend-expect';

describe('ProductCard', () => {
    it('should show the image, name and description', () => {
        render(<ProductCard id='blu-menthol-blu-plus-tank' name='Menthol blu PLUS Tank' description='classic menthol taste' image="https://www.blu.com/assets/ekvyfobrxnqa/4EYWgw01GRrtU04AUXTvIU/55fb5bb7425edf3b372e2dcc0890e0c9/menthol_tank.png" price={{ amount: '14.99', currency: 'Dollar' }} />);
        expect(screen.getByText('Menthol blu PLUS Tank')).toBeInTheDocument();
        expect(screen.getByText('classic menthol taste')).toBeInTheDocument();
        expect(screen.getByText('$14.99')).toBeInTheDocument();
    });
    })