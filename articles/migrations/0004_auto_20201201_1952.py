# Generated by Django 3.1.4 on 2020-12-01 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_auto_20201201_1950'),
    ]

    operations = [
        migrations.AlterField(
            model_name='finalcsv',
            name='company_health',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='company_quality',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='company_yield',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='correl',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='debt_to_equity',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='dividend_yield',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='earnings_yield',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='equity_to_debt',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='fair_value_score',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='free_cash_flow',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='industry_rank',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='inv_correl',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='inv_max_drawdown',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='inv_rev_uncertainty',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='inv_roe_uncertainty',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='inv_vol',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='market_share_growth',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='max_drawdown',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_holding',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_holding_pct',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_value_executed',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='net_value_executed_pct',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='payout_ratio',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='price',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='profit_margin',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='rev_growth',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='rev_uncertainty',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='risk_score',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='roe_growth',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='roe_uncertainty',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='vol',
            field=models.FloatField(null=True),
        ),
    ]
