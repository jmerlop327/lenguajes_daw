<?xml version="1.0" encoding="UTF-8"?>
<!--
Mostrar en una página web, los títulos de todas las películas (en orden de fecha de estreno)y mostrar para cada una de ellas los actores que intervienen
-->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method='html'/>
    <xsl:template match="/">
        <html>
            <head>
            </head>
            <body>
                <h1>LISTA DE PELÍCULAS</h1>
                <h3>Títulos</h3>
                <ol>
                    <xsl:for-each select="movies/movie">
                        <xsl:sort select="@year" />
                        <li>
                            <b><xsl:value-of select="title"/></b>
                            <ul>
                                <xsl:for-each select="actor">
                                    <li>
                                        <xsl:value-of select="."/>
                                    </li>
                                </xsl:for-each>
                            </ul>
                        </li>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>