import { lazy, LazyExoticComponent } from 'react';

// * Pasos para aplicar el LazyLoad en React

// * 01.- Crear un tipo para firmar el tipo de LazyExoticComponent para la cargar perezosa
type JSXComponent = () => JSX.Element;

// * 02.- Cambiar el tipo de Component de la interfaz a LazyExoticComponent
interface Routes {
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    path: string,
    to: string,
};

// * 03.- Importar independientemente los módulos mediante lazy de react
const LazyOne = lazy(() => import('../lazy/pages/LazyOne'));
const LazyTwo = lazy(() => import('../lazy/pages/LazyTwo'));
const LazyThree = lazy(() => import('../lazy/pages/LazyThree'));

export const routes: Routes[] =  [
    {
        Component: LazyOne,
        name: 'LazyOne',
        path: 'lazyOne',
        to: '/lazyOne',
    },
    {
        Component: LazyTwo,
        name: 'LazyTwo',
        path: 'lazyTwo',
        to: '/lazyTwo',
    },
    {
        Component: LazyThree,
        name: 'LazyThree',
        path: 'lazyThree',
        to: '/lazyThree',
    },
];