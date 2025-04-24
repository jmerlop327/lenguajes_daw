<?xml version="1.0" encoding="UTF-8"?>
<!--La plantilla obtiene 3 elementos porque la consulta del match "/pag/persona" obtiene tres resultados-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method='xml'/>
    <xsl:template match="/pag/persona">
        <!--Dentro de la plantilla ponemos la información que va a salir en la transformación-->
        <datos>
            <nombre>
                <xsl:value-of select="nombre"/>
            </nombre>
        </datos>
    </xsl:template>
    <xsl:template match="/pag/titulo">
    <!--Dejamos la plantilla vacía porque no queremos mostrar los elementos de la consulta del match. El título-->
    </xsl:template>
</xsl:stylesheet>