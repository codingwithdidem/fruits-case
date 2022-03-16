import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5exporting from "@amcharts/amcharts5/plugins/exporting";

const NutritionChart = ({ nutritions }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

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
        paddingLeft: 60,
      })
    );

    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    legend.data.setAll(series.dataItems);

    chart.children.unshift(
      am5.Label.new(root, {
        text: `${nutritions.calories} kcal`,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(180),
        y: am5.percent(50),
        centerY: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0,
      })
    );

    // Export

    let exporting = am5exporting.Exporting.new(root, {
      menu: am5exporting.ExportingMenu.new(root, {}),
    });

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "360px" }}></div>;
};

export default NutritionChart;
