<?xml version="1.0" encoding="UTF-8"?>
<!--con for-each-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method='xml'/>

    <xsl:template match="/">
        <datos>
            <xsl:for-each select="pag/persona">
                <nombre>
                    <xsl:value-of select="nombre"/>
                </nombre>
            </xsl:for-each>
        </datos>
    </xsl:template>

</xsl:stylesheet>