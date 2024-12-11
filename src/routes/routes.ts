import { lazy, LazyExoticComponent } from 'react';
import NoLazyLayout from '../lazy/pages/NoLazyLoad';

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
const LazyLayout = lazy(() => import('../lazy/layout/LazyLayout'));

export const routes: Routes[] =  [
    {
        Component: LazyLayout,
        name: 'LazyYout',
        path: '/lazyYout/*',
        to: '/lazyYout/',
    },
    {
        Component: NoLazyLayout,
        name: 'NoLazyLayout',
        path: 'noLazyLayout',
        to: '/noLazyLayout',
    },
];