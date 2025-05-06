<?xml version="1.0" encoding="UTF-8"?>
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
                        <li>
                            <xsl:value-of select="title"/>
                        </li>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>