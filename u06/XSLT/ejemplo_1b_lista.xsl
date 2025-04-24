<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Mi lista de discos</h2>
                <ol>
                    <xsl:for-each select="catalog/cd">
                        <li>
                            <xsl:value-of select="title"/>
                        </li>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>