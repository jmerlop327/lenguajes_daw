<?xml version="1.0" encoding="UTF-8"?>
<!--
Mostrar en una página web, en forma de tabla 
los títulos de todas las películas con puntuación mayor que 4 (en orden de fecha de estreno)
mostrar para cada una de ellas la puntuación que tiene
-->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method='html' encoding="UTF-8"/>
    <xsl:template match="/">
        <html>
            <head>
            </head>
            <body>
                <h1>LISTA DE PELÍCULAS</h1>
                <h3>Películas con puntuación mayor a 4 puntos</h3>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Puntuación</th>
                    </tr>
                    <xsl:for-each select="movies/movie">
                        <xsl:if test="@review > 4">
                            <tr>
                                <td><xsl:value-of select="title"/></td>
                                <td><xsl:value-of select="@review"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>