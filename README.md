# Mentes brillantes · Laboratorio Euler

**Autora: Marcela Nadia Bonilla Mamani**  
Métodos numéricos

Simulador del ascenso vertical de un cohete inspirado en Hidden Figures (Talentos ocultos). Permite modificar los parámetros del modelo y comparar Euler, Heun y RK4 con la solución analítica mediante tablas, gráficas y errores.

## Publicar en GitHub Pages

1. Sube todos estos archivos a la raíz de un repositorio público.
2. En Settings → Pages elige Deploy from a branch.
3. Selecciona main y / (root), y guarda.
4. Usa el enlace que GitHub muestre al finalizar el despliegue.

No requiere compilación ni instalación. Mantén index.html, app.js y solver.js juntos.

## Modelo

v′ = T/m − g − (k/m)v; y′ = v.

Caso base: m = 1000 kg, T = 15000 N, g = 9.81 m/s², k = 100 kg/s; condiciones iniciales nulas; tiempo final 20 s.

Solución exacta: v(t) = 51.9(1 − exp(−0.1t)); y(t) = 51.9t − 519(1 − exp(−0.1t)).

Euler con h = 2 s: v(20) = 46.3273 m/s, y(20) = 574.7272 m. Con h = 0.5 s cumple los límites de error final del desafío: menos de 0.5 m/s y 5 m.

Incluye exportación CSV e impresión de resultados. Las preguntas de reflexión se encuentran en el informe separado.

## Contexto

Modelo didáctico ficticio con masa, empuje, gravedad y resistencia lineal constantes. No reproduce una misión lunar ni la trayectoria de Friendship 7.

- [NASA: Katherine Johnson](https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/)
- [AIP: Exploring the Math in Hidden Figures](https://www.aip.org/inside-science/exploring-the-math-in-hidden-figures)
