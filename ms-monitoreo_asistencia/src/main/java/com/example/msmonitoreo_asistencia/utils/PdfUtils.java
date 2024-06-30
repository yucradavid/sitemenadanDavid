//package com.example.msmonitoreo_asistencia.utils;
//
//import com.example.msmonitoreo_asistencia.entity.RegistroAsistencia;
//import com.itextpdf.text.Document;
//import com.itextpdf.text.DocumentException;
//import com.itextpdf.text.Font;
//import com.itextpdf.text.Paragraph;
//import com.itextpdf.text.pdf.PdfPageEventHelper;
//import com.itextpdf.text.pdf.PdfWriter;
//
//import java.io.ByteArrayOutputStream;
//import java.util.List;
//
//public class PdfUtils {
//
//    /**
//     * Genera un PDF en formato ByteArrayOutputStream a partir de una lista de registros de asistencia.
//     *
//     * @param registroAsistencias Lista de registros de asistencia
//     * @return ByteArrayOutputStream que contiene el PDF generado
//     * @throws DocumentException Si ocurre un error al generar el documento PDF
//     */
//    public static ByteArrayOutputStream generatePdfStream(List<RegistroAsistencia> registroAsistencias) throws DocumentException {
//        Document document = new Document();
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//        PdfWriter.getInstance(document, outputStream);
//
//        // Añadir encabezado y pie de página
//        MyFooter event = new MyFooter();
//        PdfWriter writer = PdfWriter.getInstance(document, outputStream);
//        writer.setPageEvent(event);
//
//        document.open();
//
//        // Título del documento
//        Font titleFont = new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD);
//        Paragraph title = new Paragraph("Registro de Asistencia", titleFont);
//        title.setAlignment(Paragraph.ALIGN_CENTER);
//        document.add(title);
//
//        document.add(new Paragraph("\n"));
//
//        // Agregar registros de asistencia
//        for (RegistroAsistencia registro : registroAsistencias) {
//            Font boldFont = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD);
//            Paragraph estadoParagraph = new Paragraph(registro.getEstado(), boldFont);
//            Paragraph fechaParagraph = new Paragraph("Fecha: " + registro.getFecha());
//            document.add(fechaParagraph);
//            document.add(estadoParagraph);
//            document.add(new Paragraph("\n"));
//        }
//
//        document.close();
//
//        return outputStream;
//    }
//
//    // Clase interna para manejar el pie de página
//    static class MyFooter extends PdfPageEventHelper {
//
//        @Override
//        public void onEndPage(PdfWriter writer, Document document) {
//            Paragraph footer = new Paragraph("Página " + writer.getPageNumber());
//            footer.setAlignment(Paragraph.ALIGN_CENTER);
//            try {
//                document.add(footer);
//            } catch (DocumentException e) {
//                e.printStackTrace();
//            }
//        }
//    }
//}
