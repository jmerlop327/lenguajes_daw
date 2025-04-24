<?xml version="1.0" encoding="UTF-8"?>
<!--La plantilla solo obtiene un elemento porque la consulta del match "/" solo obtiene un resultado-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method='xml'/>
    <xsl:template match="/">
        <!--Dentro de la plantilla ponemos la información que va a salir en la transformación-->
        <datos>
            <nombre>
                <xsl:value-of select="pag/persona/nombre"/>
            </nombre>
        </datos>
    </xsl:template>
</xsl:stylesheet>