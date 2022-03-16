import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5exporting from "@amcharts/amcharts5/plugins/exporting";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

const NutritionChart = ({ nutritions }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    let responsive = am5themes_Responsive.newEmpty(root);

    responsive.addRule({
      relevant: am5themes_Responsive.widthL,
      applying: function () {
        chart.set("layout", root.verticalLayout);

        series.labels.template.set("visible", false);
        series.ticks.template.set("visible", false);

        legend.setAll({
          y: null,
          centerY: null,
          x: am5.percent(30),
          centerX: am5.p0,
          marginTop: 30,
        });
      },
      removing: function () {
        chart.set("layout", root.horizontalLayout);

        series.labels.template.set("visible", true);
        series.ticks.template.set("visible", true);

        legend.setAll({
          y: am5.p50,
          centerY: am5.p50,
          x: null,
          centerX: null,
        });
      },
    });

    root.setThemes([am5themes_Animated.new(root), responsive]);

    // root.setThemes([am5themes_Responsive.new(root)]);

    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        innerRadius: am5.percent(50),
        exportable: true,
        layout: root.horizontalLayout,
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        alignLabels: false,
      })
    );

    series.labels.template.setAll({
      textType: "aligned",
      centerX: 0,
      centerY: 0,
      text: "{category}",
    });

    series.states.create("hidden", {
      endAngle: -90,
    });

    const data = [
      {
        category: "Protein",
        value: nutritions.protein,
      },
      {
        category: "Fat",
        value: nutritions.fat,
      },
      {
        category: "Carbohydrates",
        value: nutritions.carbohydrates,
      },
      {
        category: "Sugar",
        value: nutritions.sugar,
      },
    ];

    series.data.setAll(data);

    series.appear(1000, 100);

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        layout: root.verticalLayout,
        nameField: "name",
        fillField: "color",
        strokeField: "color",
        y: am5.percent(50),
        centerY: am5.percent(50),
        paddingRight: 20,
        paddingLeft: 20,
      })
    );

    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    legend.data.setAll(series.dataItems);
    // Export

    let exporting = am5exporting.Exporting.new(root, {
      menu: am5exporting.ExportingMenu.new(root, {}),
    });

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" className="w-full h-[330px] "></div>;
};

export default NutritionChart;
